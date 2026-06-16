export function money(cents:number,currency="EUR"){return new Intl.NumberFormat("pt-PT",{style:"currency",currency}).format(cents/100)}
export function cn(...v:Array<string|false|undefined|null>){return v.filter(Boolean).join(" ")}
