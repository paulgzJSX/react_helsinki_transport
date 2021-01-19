import { useContext, memo } from 'react'
import { convertTime, defineColor } from '../../../helpers/helpers'
import { RouteContext } from '../../../App'

import { CircleMarker, Tooltip } from 'react-leaflet'

type PropTypes = {
    coords: any,
    type: string
}

export default memo(function LocationTooltip({ coords, type }: PropTypes) {
    const { 
        state: { selectedLeg: { startTime, mode, endTime, from: { stop: {name: depStop } }, to: { name: arrStop } } } } = useContext(RouteContext)

    const stop = type === 'departure' ? depStop : arrStop
    const prefix = type === 'departure' ? 'dep.' : 'arr.'
    const time = type === 'departure'
        ? convertTime(new Date(startTime))
        : convertTime(new Date(endTime))

    return (
        <CircleMarker center={coords} pathOptions={{ color: defineColor(mode) }} radius={3}>
            <Tooltip permanent>
                {stop} {prefix} {time}
            </Tooltip>
        </CircleMarker>
    )
})
