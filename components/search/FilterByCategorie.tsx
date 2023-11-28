import Image from "apps/website/components/Image.tsx";

const URL_BASE_IMAGE = 'https://texf1k9mfq.map.azionedge.net/Custom/Content/Themes/HardCore/Imagens/Categorias'

function CardDepartmentList(title: string) {
  return (
    <div class="flex flex-col items-center justify-center">
      <Image
        class="object-contain border rounded-full p-4 w-[50px] h-[50px]"
        src={`${URL_BASE_IMAGE}/${title}`}
        alt={title} width={30} height={30} 
      />
      <p class="text-sm font-medium text-[#000]">{title.split('/')[1]}</p>
    </div>
  )
}

export default function FilterByCategorie() {
  return (
    <div class="">
      <div>
        
      </div>
    </div>
  )
}
