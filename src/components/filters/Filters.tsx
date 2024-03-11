import { FC } from 'react'
import './Filters.scss'
import { ColorFilter } from '../colorFilter/ColorFilter';
import { PrivacyFilter } from '../privacyFilter/PrivacyFilter';
import { FriendsFilter } from '../friendsFIlter/FriendsFilter';
import { GroupFilter } from '../../api/types';

interface FiltersProps {
    colors: (string | undefined)[];
    setFilterOptions: (filterOptions: GroupFilter) => void;
    filterOptions: GroupFilter;
}

const Filters: FC<FiltersProps> = ({ colors, setFilterOptions, filterOptions }) => {

    return (
        <div className='filters'>
            <ColorFilter colors={colors} setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
            <PrivacyFilter setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
            <FriendsFilter setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
        </div>
    )
}

export { Filters }

