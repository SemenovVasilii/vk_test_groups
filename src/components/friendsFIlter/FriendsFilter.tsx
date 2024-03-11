import './FriendsFilter.scss'
import {
    RadioGroup,
    Radio,
    Title
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { FC, useCallback } from 'react';
import { GroupFilter } from '../../api/types';

interface FriendsFilterProps {
    setFilterOptions: (filterOptions: GroupFilter) => void;
    filterOptions: GroupFilter;
}

const FriendsFilter: FC<FriendsFilterProps> = ({ setFilterOptions, filterOptions }) => {

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterOptions({ ...filterOptions, friends: e.target.value })
    }, [setFilterOptions, filterOptions]);

    return (
        <div className='friendsfilter'>
            <Title className="friendsfilter__title">Фильтрация по наличию друзей </Title>
            <RadioGroup mode="horizontal" onChange={handleChange}>
                <Radio name="friends" value="all" defaultChecked>
                    Все
                </Radio>
                <Radio name="friends" value="hasFriends">
                    Есть друзья
                </Radio>
                <Radio name="friends" value="noFriends" >
                    Нет друзей
                </Radio>
            </RadioGroup>
        </div>
    )
}

export { FriendsFilter }

