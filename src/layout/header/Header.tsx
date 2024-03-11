import './Header.scss'
import {
    Title,
    Image
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function Header() {
    return (
        <header className='header'>
            <div className="header__row">
                <div className="header__logo">
                    <Image src={require('../../ui/img/logo.png')} />
                </div>
                <div className="header__title">
                    <Title level='1' style={{ color: 'black' }}>
                        VK Groups test app
                    </Title>
                </div>
            </div>
        </header>
    )
}

export { Header }
