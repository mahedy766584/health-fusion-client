/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";

const Calendar = ({ date, handleChange }) => {
    return (
        <DateRange
            className="shadow-md"
            rangeColors={['#F7A582']}
            ranges={[date]}
            onChange={handleChange}
            minDate={new Date()}
        />
    );
};

export default Calendar;