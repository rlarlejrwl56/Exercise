import Image from "next/image";

const popularBrand = () => {
    const popBrand = [
        {
            name : '롤렉스',
            imgName : 'categoryShoes'
        },
        {
            name : '샤넬',
            imgName : 'categoryShoes'
        },
        {
            name : '에르메스',
            imgName : 'categoryShoes'
        },
        {
            name : '구찌',
            imgName : 'categoryShoes'
        },
        {
            name : '루이비통',
            imgName : 'categoryShoes'
        },
        {
            name : '팔라스',
            imgName : 'categoryShoes'
        },
        {
            name : '어콜드월',
            imgName : 'categoryShoes'
        },
        {
            name : '노스페이스',
            imgName : 'categoryShoes'
        },
        {
            name : '뮤지엄비지터',
            imgName : 'categoryShoes'
        },
        {
            name : '휴먼 메이드',
            imgName : 'categoryShoes'
        },

    ]
    return (
        <div>
            <div className='searchText'>인기 브랜드</div>
            <div className='flex  mt-4 flex-wrap justify-between'>
                {popBrand.map((ctTag, index) => (
                    <div className='text-center'>
                        <div key={index} className='max-lg:mobileCategory webCategory'>
                            <Image src={require(`../../public/images/category/${ctTag.imgName}.png`)} alt={index} width={80} height={100} className='m-auto lg:w-30 lg:h-30 max-lg:w-fit max-h-fit'/>
                        </div>
                        <span className='text-sm'>{ctTag.name}</span>
                    </div>

                ))}
            </div>
        </div>
    )
}
export default popularBrand;