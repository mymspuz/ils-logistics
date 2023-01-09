import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

import { ITransportationRequest } from '../interfaces/RequestsTypes'
import { setSelectRequest, setTransportRequests } from '../store/slice/transportRequestsSlice'
import { useAppDispatch } from '../hooks'
import { getTransportationRequests } from '../data'

type TState = {
    data: ITransportationRequest[]
    isLoading: boolean
}
const TableComponent: React.FC = () => {
    const [state, setState] = useState<TState>({ data: [], isLoading: false})
    const [stateRow, setStateRow] = useState<{ rowId: number }>({ rowId: 0 })

    const dispatch = useAppDispatch()

    const columns: ColumnsType<ITransportationRequest> = [
        { title: 'Номер заявки', dataIndex: 'id', key: 'id', render: (value: number) => `№${value}` },
        { title: 'Координаты ОТ lat', dataIndex: 'latFrom', key: 'latFrom' },
        { title: 'Координаты ОТ lng', dataIndex: 'lngFrom', key: 'lngFrom' },
        { title: 'Координаты ДО lat', dataIndex: 'latTo', key: 'latTo' },
        { title: 'Координаты ДО lng', dataIndex: 'lngTo', key: 'lngTo' },
    ]

    const setRowClassName = (record: any) => {
        return record.id === stateRow.rowId ? 'ant-table-row-selected' : ''
    }

    const onClickRow = (record: any) => {
        return {
            onClick: () => {
                setStateRow({
                    rowId: record.id,
                })
                dispatch(setSelectRequest(record))
            },
        }
    }

    useEffect(() => {
        setState({ data: [], isLoading: true })
        getTransportationRequests()
            .then(data => {
                dispatch(setTransportRequests(data))
                const timer = setTimeout(() => {
                    setState({ data: data, isLoading: false })
                }, 1000)
                return () => clearTimeout(timer)
            })
    }, [dispatch])

    return (
        <Table
            rowKey={(record) => record.id}
            dataSource={state.data}
            columns={columns}
            loading={state.isLoading}
            className={''}
            rowClassName={setRowClassName}
            onRow={onClickRow}
        />
    )
}

export default TableComponent