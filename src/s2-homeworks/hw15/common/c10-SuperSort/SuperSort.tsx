import React from 'react'
import iconUp from '../../icon/up.svg'
import iconDown from '../../icon/down.svg'
import sortIcon from '../../icon/iconSort.png'

// добавить в проект иконки и импортировать
const downIcon = iconDown
const upIcon = iconUp
// const noneIcon = '[--]'
const noneIcon = sortIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case "": {
            return down
        }
        case down: {
            return up
        }
        case up: {
            return down
        }
        default: {
            return down
        }
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {

    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{
                position: "relative",
                top: "2px",
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                width: "12px",
                height: "12px",
                objectFit: "cover"
        }}
        >

            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={noneIcon}
            />
        </span>
    )
}

export default SuperSort
