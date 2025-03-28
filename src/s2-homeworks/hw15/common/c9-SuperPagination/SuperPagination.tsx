import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)

    const onChangeCallback = (event: any, page: number) => {
        onChange?.(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        onChange?.(page, +event.currentTarget.value)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    '& .MuiButtonBase-root': {
                        '&:hover': {
                            bgcolor: "#419eff",
                            color: "#fff"
                        }
                    },
                    '& .Mui-selected': {
                        bgcolor: "#0066CC !important",
                        color: "#fff"
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                shape={"rounded"}
                hideNextButton
                hidePrevButton
            />

            <div style={{display: 'flex', gap: "10px", marginLeft: "24px"}}>
                <span className={s.text1}>
                    показать
                </span>

                <SuperSelect
                    id={id + '-pagination-select'}
                    value={itemsCountForPage}
                    options={[
                        {id: 4, value: 4},
                        {id: 7, value: 7},
                        {id: 10, value: 10},
                    ]}
                    onChange={onChangeSelect}
                    className={s.select}
                />

                <span className={s.text2}>
                    строк в таблице
                </span>
            </div>
        </div>
    )
}

export default SuperPagination
