    import { Button } from './ui/button';

type Props={
    onClickMinus: () => void
    ;
    onClickPlus:() => void
    ;
    quantity:number;
}
const ButtonCounter = ({onClickMinus,onClickPlus,quantity}:Props) => {
  return (
    <div className="flex items-center gap-2">
    <Button size="sm" variant="outline" className="text-orange-500" onClick={onClickMinus}>−</Button>
    <span>{quantity}</span>
    <Button size="sm" variant="outline" className="text-orange-500" onClick={onClickPlus}>+</Button>
  </div>
  )
}

export default ButtonCounter
