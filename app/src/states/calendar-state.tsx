import { createMachine } from 'xstate'

const Calendar_display_state =  createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
      inactive: { on: { TOGGLE: 'active' } },
      active: { on: { TOGGLE: 'inactive' } }
    }
  })

  
  export default Calendar_display_state