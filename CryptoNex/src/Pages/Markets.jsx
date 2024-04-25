import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Circles } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { apiCall } from "../redux/coinsSlice"

const Markets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const isPending = useSelector((state) => state.coins.pending);
  const data = useSelector((state) => state.coins.data);
  const dispatch = useDispatch();

  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data?.slice(indexOfFirstItem, indexOfLastItem) || [];

  useEffect(() => {
    if (isPending) {
      dispatch(apiCall());
    }
  }, []);

  const totalPages = Math.ceil(data?.length / itemsPerPage) || 0;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/Markets/${id}`);
  };

  return (
    <div className="bg-customBg p-6 min-h-[90vh]">
      <div className="lg:w-[85%] mx-auto">
        <h1 className="lg:text-6xl md:text-5xl mt-10 text-4xl text-white font-bold mb-10 text-center">
          Market Details
        </h1>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            {
              isPending ? (<div className='flex flex-col text-customYellow items-center justify-center bg-customBg' >
                <div >
                  <Circles
                    height="80"
                    width="80"
                    color="#f4a641"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
                <h1 className='-mr-2 mt-4 text-2xl'>Loading...</h1>
              </div>) : (<table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left bg-customYellow text-white uppercase border-b border-gray-600">
                    <th className="px-1 py-3">Rank</th>
                    <th className="px-4 py-3">Coin</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="bg-customBg text-white">
                  {
                    currentData.map((instance, index) => (
                      <tr
                        key={index}
                        className="text-white hover:bg-customYellow cursor-pointer text-lg"
                        onClick={() => handleRowClick(instance.id)}
                      >
                        <td className="border font-semibold border-textColor px-1 py-3 text-center">
                          {instance.market_cap_rank}
                        </td>
                        <td className="px-4 py-3 border border-textColor">
                          <div className="flex items-center">
                            <div className="relative w-16 h-16 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={instance.image}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <p className="font-bold text-lg md:text-xl">{instance.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-ms font-semibold border border-textColor">
                          ${' '}
                          {instance.current_price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </td>
                        <td className="px-4 py-3 border border-textColor">
                          <span className={instance.market_cap_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
                            {instance.market_cap_change_percentage_24h}%
                          </span>
                        </td>
                        <td className="px-4 py-3 border font-semibold">
                          ${' '}
                          {instance.market_cap.toLocaleString().length > 14
                            ? instance.market_cap.toLocaleString().slice(0, 14) + '...'
                            : instance.market_cap.toLocaleString()}
                        </td>
                      </tr>
                    ))

                  }
                </tbody>
              </table>)
            }
          </div>
          {/* Pagination controls */}
          <div className="mt-4 flex justify-center flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`ml-2 px-3 py-1 mt-3 rounded-lg ${pageNumber === currentPage ? 'bg-customYellow text-white' : 'bg-white text-black'
                  }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markets;
