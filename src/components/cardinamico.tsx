interface CardProp {
    name: string,
    icon: JSX,
    value: number,
    color: string
}

export function Cardinamico ({name, icon, value, color}: CardProp) {
    return (
        <div className=>
            {name}

        </div>
    )
}