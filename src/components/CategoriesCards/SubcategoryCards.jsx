
export default function SubcategoryCards({subCategoryInfo}) {
    const {name} =  subCategoryInfo
    
  return <>
  <div className="bg-black/90 text-white hover:bg-white hover:text-black transition-colors duration-400 cursor-pointer rounded-full text-sm font-semibold text-center h-22 relative">

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">{name}</div>
            
    </div>
  </>
}
