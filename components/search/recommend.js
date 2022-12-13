

const recommend = () => {
    const keyWord = [
        {name : '스캇'},
        {name : '시카고'},
        {name : '자더에러'},
        {name : '리뉴드 테크'},
        {name : '어그'},
        {name : '인테리어'},
        {name : '노스페이스'},
        {name : '크림 단독'},
        {name : '주얼리'},
    ];
    return (
        <div>
            <div className='searchText'>추천 검색어</div>
                {keyWord.map((reName) =>
                    (<button className='recommendLayer'>
                        {reName.name}
                    </button>)
                )}

        </div>
    )
}
export default recommend;