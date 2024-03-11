import { Group } from '../../api/types'
import './GroupElement.scss'
import { FC, useState } from 'react'
import {
    Text,
    Title,
    Button
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Friend } from '../../ui/friend/Friend';

interface GroupElementProps {
    group: Group
}

const GroupElement: FC<GroupElementProps> = ({ group }) => {

    const [visibleFriends, setVisibleFriends] = useState<boolean>(false)

    const friends = group.friends

    return (
        <article className='groupelement'>
            <div className="groupelement__column">
                <div className="groupelement__avatar" style={{ backgroundColor: group.avatar_color }}></div>
                <Title className="groupelement__name">{group.name}</Title>
                <Text className="groupelement__private">Приватность: {group.closed ? "открыта" : "закрыта"}</Text>
                <Text className="groupelement__members">Подписчики: {group.members_count}</Text>
                {group.friends?.length ?
                    <Text className="groupelement__friend">Друзья: <Button mode="secondary" onClick={() => setVisibleFriends(true)}>{group.friends?.length}</Button></Text>
                    :
                    <></>
                }
                {(group.friends?.length && !visibleFriends) ?
                    <Button mode="secondary" onClick={() => setVisibleFriends(true)}> Показать друзей</Button>
                    :
                    <></>
                }
                {visibleFriends ? (
                    <>
                        {friends?.map((friend, index) => (
                            <Friend key={index} friend={friend} />
                        ))}
                        <Button mode="secondary" onClick={() => setVisibleFriends(false)} style={{ marginTop: '5px' }}>Скрыть</Button>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </article>
    )
}

export { GroupElement }