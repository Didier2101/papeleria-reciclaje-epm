import logo from '../assets/logo.svg';

export default function Logo() {
    return (
        <div className="flex items-center justify-center">
            <img
                src={logo}
                alt="Logo epm" className="w-20 h-auto"

            />
        </div>
    )
}
