import { BadgeProps } from "@/lib/types"
import { badgesVariants } from "@/lib/utils"


const Badge = ({variant = "in_stock" , children , customClass} : BadgeProps) => {
  return (
    <div className={`${badgesVariants[variant]} ${customClass} font-medium text-[14px] flex items-center justify-center`}>
      {children}
    </div>
  )
}

export default Badge
