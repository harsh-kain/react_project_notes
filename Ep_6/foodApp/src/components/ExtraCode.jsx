{/* <div className="relative bg-slate-400	">  
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path stroke="currentColor" />
            </svg>
          </div>

          <input
            type="search"
            id="default-search"
            assName="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="search restro"
            required 
            value={searchFilter}
            onChange={(e) => {setSearchFilter(
              e.target.value)
            }}
          />

          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

            onClick={()=>{

              const newData = resData.filter((res) =>{
                return res.info.name.toLowerCase().includes(searchFilter.toLowerCase()) 
              })
              setFilterData(newData);
            }}
          >
            Search
          </button>
        </div> */}