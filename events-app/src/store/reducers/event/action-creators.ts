import { EventActionEnum, SetEventAction, SetGuestsAction } from './types';
import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models//IEvent';
import UserService from '../../../api/UserService';
import { AppDispatch } from '../../index';

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload }),
  setEvents: (payload: IEvent[]): SetEventAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (error) {
      console.log(error);
    }
  }
}
