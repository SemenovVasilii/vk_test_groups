import './Main.scss'
import { GroupList } from '../../components/groupList/GroupList'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { GetGroupsResponse, Group, GroupFilter } from '../../api/types'
import { Filters } from '../../components/filters/Filters'

function Main() {

    const [groups, setGroups] = useState<Group[]>([])
    const [isLoading, setLoading] = useState<boolean>(true)
    const [colors, setColors] = useState<(string | undefined)[]>([])
    const [filterOptions, setFilterOptions] = useState<GroupFilter>({
        'color': 'all',
        'privacy': 'all',
        'friends': 'all'
    })

    const fetchGroups = useCallback(async (): Promise<GetGroupsResponse> => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const response = await require('../../api/groups.json')
            setGroups(response)
            getUniqueColors(response)
            setLoading(false)
            return response
        } catch (error) {
            console.error('Fetch error: ', error)
            throw error
        }
    }, [])

    const getUniqueColors = useCallback((groups: Group[]) => {
        setColors((responseColors) => {
            const existingColors = new Set(responseColors)
            groups.forEach((group) => {
                (group.avatar_color !== undefined) ? existingColors.add(group.avatar_color) : existingColors.add('nothing')
            })
            return Array.from(existingColors)
        })
    }, [])

    const filteredGroups = useMemo(() => {
        return groups.filter(group => {
            if (filterOptions.color !== 'all' && filterOptions.color !== 'nothing' && group.avatar_color !== filterOptions.color) return false;
            if (filterOptions.color === 'nothing' && group.avatar_color !== undefined) return false;
            if (filterOptions.friends === 'hasFriends' && (!group.friends || group.friends.length === 0)) return false;
            if (filterOptions.friends === 'noFriends' && group.friends && group.friends.length > 0) return false;
            if (filterOptions.privacy !== 'all' && group.closed === (filterOptions.privacy === 'private')) return false;
            return true;
        });
    }, [groups, filterOptions]);

    useEffect(() => {
        fetchGroups()
    }, [])

    return (
        <div className='main'>
            <Filters colors={colors} setFilterOptions={setFilterOptions} filterOptions={filterOptions} />
            <GroupList loading={isLoading} groups={filteredGroups} />
        </div>
    )
}

export { Main }
