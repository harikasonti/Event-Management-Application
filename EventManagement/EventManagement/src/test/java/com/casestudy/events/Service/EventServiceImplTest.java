package com.casestudy.events.Service;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.casestudy.events.Entity.Event;
import com.casestudy.events.Exceptions.EventNotFoundException;
import com.casestudy.events.Repository.IEventRepository;

import java.util.ArrayList;
import java.util.List;



import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.Mockito.when;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;



@ExtendWith(MockitoExtension.class)
public class EventServiceImplTest {
	@Mock
    IEventRepository repo;
	
	@Mock
    IEventService service;
	
    
    @Test
    public void testAddEvents() {
        Event event=new Event(13,"Get together",15000,250,false);
        repo.save(event);
        assertThat(event.getEventId()).isEqualTo(13);
    }
    @Test
    public void testGetAllEvents() throws EventNotFoundException {    
    	
    	List<Event> list = new ArrayList<Event>();
		Event event = new Event(13,"Get together",15000,250,false);
		list.add(event);
		when(service.getAllEvents()).thenReturn(list);
		List<Event> eventList = service.getAllEvents();

		assertEquals(1, eventList.size());
		verify(service, times(1)).getAllEvents();
    }
    @Test
    public void testGetEventById() throws EventNotFoundException {

    	when(service.getEventById(13)).thenReturn(new Event(13,"Get together",15000,250,false));
		Event event = service.getEventById(13);
		assertEquals("Get together", event.getEventName());

    }
    
    
//    @Test
//    public void testUpdateEvent() {
//
//    	Event event = repo.findById(13).get();   	
//        event.setCapacity(200);       
//        Event updatedevent = repo.save(event);  
//        assertThat(updatedevent.getEventCost()).isEqualTo(200);
//    }
    
    
    @Test
    public void testCancelEvent() {
        repo.deleteById(14);
        assertThat(repo.existsById(14)).isFalse();
    }
    
    


}