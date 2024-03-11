import './PrivacyFilter.scss'
import {
    RadioGroup,
    Radio,
    Title
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { FC, useCallback } from 'react';
import { GroupFilter } from '../../api/types';

interface PrivacyFilterProps {
    setFilterOptions: (filterOptions: GroupFilter) => void;
    filterOptions: GroupFilter;
}

const PrivacyFilter: FC<PrivacyFilterProps> = ({ setFilterOptions, filterOptions }) => {

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterOptions({ ...filterOptions, privacy: e.target.value })
    }, [setFilterOptions, filterOptions]);

    return (
        <div className='privacyfilter'>
            <Title className="privacyfilter__title">Фильтрация по типу приватности группы</Title>
            <RadioGroup mode="horizontal" onChange={handleChange}>
                <Radio name="privacy" value="all" defaultChecked>
                    Все
                </Radio>
                <Radio name="privacy" value="open">
                    Открытые
                </Radio>
                <Radio name="privacy" value="private" >
                    Приватные
                </Radio>
            </RadioGroup>
        </div>
    )
}

export { PrivacyFilter }
