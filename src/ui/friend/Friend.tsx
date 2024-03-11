import './Friend.scss'
import { User } from '../../api/types'
import { FC } from 'react'
import {
    Text
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

interface FriendProps {
    friend: User
}

const Friend: FC<FriendProps> = ({ friend }) => {
    return (
        <section className='friend'>
            <div className="friend__row">
                <Text className="friend__firstname">{friend.first_name}</Text>
                <Text className="friend__lastname">{friend.last_name}</Text>
            </div>
        </section>

    )
}

export { Friend }
