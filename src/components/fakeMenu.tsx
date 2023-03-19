import MenuLi from './menuLi'

const FakeMenu = ({ data }) => {
    return (
        <>
            <ul className='col-span-1 flex flex-col gap-3'>
                {data.map((menuitem, index) => {
                    return <MenuLi key={index} title={menuitem} />
                })}
            </ul>
            <ul className='col-span-1 flex flex-col gap-3'>
                {data.map((menuitem, index) => {
                    return <MenuLi key={index} title={menuitem} />
                })}
            </ul>
            <ul className='col-span-1 flex flex-col gap-3'>
                {data.map((menuitem, index) => {
                    return <MenuLi key={index} title={menuitem} />
                })}
            </ul>
        </>
    )
}

export default FakeMenu
