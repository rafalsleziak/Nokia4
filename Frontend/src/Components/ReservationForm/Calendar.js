 //Uzyj tego do wyswietlenia dancyh o zaznaczonym obszarze w promptice
import React, {Component} from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop/'

import moment from 'moment'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less'
import 'react-big-calendar/lib/css/react-big-calendar.css'


BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class Dnd extends Component {
  static defaultProps = {
    data: []
  }
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      startDate: '',
      endDate: '',
      showCalendar: true,
      slotSelected:'',
    }

    this.moveEvent = this.moveEvent.bind(this);
    this.resizeEvent = this.resizeEvent.bind(this);

  }

  moveEvent({ event, start, end }) {
    const { data } = this.state

    const idx = data.indexOf(event)
    const updatedEvent = { ...event, start, end }

    const nextEvents = [...data]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      data: nextEvents,
    })
  }

  handleSlotSelection(slotInfo){
    this.setState({startDate: new Date(slotInfo.start)})
    this.setState({endDate: new Date(slotInfo.end)})
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })
  }

  render() {
    return (
        <DragAndDropCalendar
          selectable
          startAccessor='start'
          endAccessor='end'
          events={this.props.data}
          onEventDrop={this.moveEvent}
          defaultView="week"
          defaultDate={new Date()}
          onSelectSlot={this.props.onRenderChange}
          onSelectEvent={this.props.onRenderChange}
         />
    )
  }
}

export default DragDropContext(HTML5Backend)(Dnd)
