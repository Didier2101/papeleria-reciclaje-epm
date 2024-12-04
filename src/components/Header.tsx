import Divider from '../utils/Divider'
import Logo from '../utils/Logo'
export default function Header() {
    return (
        <>
            <div className="w-full bg-white shadow-lg p-5">
                <div className="px-5 mx-auto flex flex-col gap-2">
                    <nav className="flex items-center justify-start">
                        <h2 className="text-titleGreen text-2xl">Papelería de reciclaje</h2>
                        <Divider />
                        <Logo />
                    </nav>
                </div>
            </div>

        </>
    )
}
