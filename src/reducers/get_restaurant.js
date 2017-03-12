import { GET_RESTAURANT, RESET_CARDS } from '../actions/types';

let exData = [
  {
    image: 'http://www.chipshield.com/wp-content/uploads/2015/06/placeholder1.jpg',
    title: 'Restaurant Name',
    subTitle: 'Card subTitle',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
  },
  {
    image: 'http://www.chipshield.com/wp-content/uploads/2015/06/placeholder1.jpg',
    title: 'Restaurant Name2',
    subTitle: 'Card subTitle2',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
  },
  {
    image: 'http://www.chipshield.com/wp-content/uploads/2015/06/placeholder1.jpg',
    title: 'Restaurant Name3',
    subTitle: 'Card subTitle3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
  },
  {
    image: 'http://www.chipshield.com/wp-content/uploads/2015/06/placeholder1.jpg',
    title: 'Restaurant Name4',
    subTitle: 'Card subTitle4',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.",
  }
]
const INITIAL = { data: exData }

export default function(state = INITIAL, action){
  switch (action.type){
    case GET_RESTAURANT:
      console.log(action)
      return state


    case 'AVAILABILITY':

      return {...state,
        availability: {
          ...state.availability,
          [action.payload.id]: action.payload
        }
      }


    case RESET_CARDS:
      return {...state, data: []}

    default:
      return state
  }

  return state;
}
