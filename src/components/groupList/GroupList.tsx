import './GroupList.scss'
import React, { FC } from 'react'
import { Group } from '../../api/types'
import {
    Spinner,
    CardScroll,
    Card
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { GroupElement } from '../groupElement/GroupElement';

interface GroupListProps {
    loading: boolean;
    groups: Group[]
}

const GroupList: FC<GroupListProps> = ({ loading, groups }) => {

    return (
        <section className='grouplist'>
            {loading ? (
                <div className='grouplist__preloader'>
                    <Spinner size="large" style={{ margin: "50px 0px" }} />
                </div>
            ) : (
                <div className='grouplist__groups' >
                    <CardScroll size={false}>
                        {groups.map((group: Group) => (
                            <Card key={group.id}>
                                <GroupElement group={group}></GroupElement>
                            </Card>
                        ))}
                    </CardScroll>
                </div >
            )}
        </section>
    )

}

export { GroupList }
