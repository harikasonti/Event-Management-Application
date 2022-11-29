package com.casestudy.events.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.casestudy.events.Entity.Event;
import com.casestudy.events.Exceptions.EventNotFoundException;
@Service
public interface IEventService {

	public Event addEvents(Event event);
	public List<Event> getAllEvents()throws EventNotFoundException;
	public boolean cancelEvent(int eventId);
	public boolean updateEvent(int id, Event event);
	public Event getEventById(int eventId) throws EventNotFoundException;

}
