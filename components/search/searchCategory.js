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
        <div className='w-full'>
            <div className='searchText'>카테고리</div>
            <div className='flex  mt-4 flex-wrap w-full'>
                {category.map((ctTag, index) => (
                    <div className='text-center w-1/5'>
                        <div key={index} className=' '>
                            <div className='max-lg:mobileCategory webCategory '>
                                <Image src={require(`../../public/images/category/${ctTag.imgName}.png`)} alt={index}  height={60} className='mx-auto w-min'/>
                            </div>
                        </div>
                        <span className='text-sm mr-4'>{ctTag.name}</span>
                    </div>

                ))}
            </div>
        </div>
    )
}
export  default searchCategory;