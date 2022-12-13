
const popularSearch = () =>{
   const popular = [
       {name : '패딩'},
       {name : '나이키'},
       {name : '에어포스'},
       {name : '조던'},
       {name : '덩크'},
       {name : '뉴발란스'},
       {name : '슈프림'},
       {name : '샤넬'},
       {name : '스투시'},
       {name : '삼바'}
   ];
    return (
        <div className='flex flex-col'>
            <div className='searchText flex items-center'>
                <div>인기검색어</div>
                <div className='max-lg:ml-auto lg:ml-1 lg:mt-0.5 text-xs font-extralight'>12.30 10:00 기준</div>
            </div>
            <div>
                <ul  className='list-inside flex-col flex flex-wrap h-52 '>
                    {popular.map((popKey, index) => (
                        <li key={index} className='mt-4 w-fit text-sm '>{index + 1} {popKey.name}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
export default popularSearch;