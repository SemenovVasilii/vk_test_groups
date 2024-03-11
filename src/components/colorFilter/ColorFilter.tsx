import './ColorFilter.scss'
import {
    NativeSelect,
    Title
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { FC, useCallback } from 'react';
import { GroupFilter } from '../../api/types';

interface ColorFilterProps {
    colors: (string | undefined)[];
    setFilterOptions: (filterOptions: GroupFilter) => void;
    filterOptions: GroupFilter;
}

const ColorFilter: FC<ColorFilterProps> = ({ colors, setFilterOptions, filterOptions }) => {

    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterOptions({ ...filterOptions, color: e.target.value })
    }, [setFilterOptions, filterOptions]);

    return (
        <div className='colorfilter'>
            <Title className='colorfilter__title'>Фильтрация по цвету группы</Title>
            <NativeSelect onChange={handleChange}>
                <option value='all'>all</option>
                {colors.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                ))}
                <option value={'nothing'}>nothing</option>
            </NativeSelect>
        </div>
    )
}

export { ColorFilter }

