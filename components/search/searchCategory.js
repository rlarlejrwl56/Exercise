import Image from "next/image";
import categoryShoes from '../../public/images/category/categoryShoes.png';
const searchCategory = () => {
    const category = [
        {   name : '신발',
            imgName : 'categoryShoes'
        },
        {   name : '의류',
            imgName : 'categoryShoes'
        },
        {   name : '패션잡화',
            imgName : 'categoryShoes'},
        {   name : '라이프',
            imgName : 'categoryShoes'},
        {   name : '테크',
            imgName : 'categoryShoes'}
    ];
    return (
        <div>
            <div className='searchText'>카테고리</div>
        <div className='flex justify-between mt-4 flex-wrap'>
            {category.map((ctTag, index) => (
                <div className='text-center'>
                <div key={index} className='max-lg:mobileCategory webCategory '>
                    <Image src={require(`../../public/images/category/${ctTag.imgName}.png`)} alt={index} width={80} height={100} className='m-auto lg:w-30 lg:h-30 max-lg:w-fit max-h-fit'/>
                </div>
                    <span className='text-sm'>{ctTag.name}</span>
                </div>

            ))}
        </div>
        </div>
    )
}
export  default searchCategory;