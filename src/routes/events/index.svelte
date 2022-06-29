<script context="module">
	let loadedEvents='';
	import { events } from '../../stores/events';
</script>

<script>
	import FullCalendar, { Draggable } from 'svelte-fullcalendar';
	import daygridPlugin from '@fullcalendar/daygrid';
	import timegridPlugin from '@fullcalendar/timegrid';
	import interactionPlugin from '@fullcalendar/interaction';

	export let eventObjs;
	export let options;

events.subscribe(value => {
	console.log(value);
	loadedEvents=value;
	eventObjs=value.map(evento => ({
		start: new Date(evento.eventsfields.startDate),
		title:evento.title,
		url:'events/' + evento.slug,
		allDay: true,
	}));
	
	console.log(eventObjs);

	options = {
		droppable: true,
		editable: false,
		events: eventObjs,
		displayEventTime: false,
		initialView: 'dayGridMonth',
		plugins: [daygridPlugin, timegridPlugin, interactionPlugin],
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,dayGridWeek,dayGridDay',
		},
		height: '100%',
		weekends: true,
		locale: 'es',
		allDayDefault: true,


	};
  });

 	 
	
	
	let calendarComponentRef;
	let eventData = { title: 'my event', duration: '02:00', url: 'http://google.com' };

	
</script>

<svelte:head>
	<title>Eventos</title>
</svelte:head>

<div class="demo-app my-24">
	<div class="demo-app-calendar">
		<FullCalendar bind:this={calendarComponentRef} {options} />
	</div>
</div>

<style>
	:global(* > *) {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.demo-app {
		height: 100vh;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
		font-size: 14px;
	}

	.demo-app-calendar {
		width: 100%;
		flex-grow: 1;
		margin: 0 auto;
		max-width: 900px;
	}
	:global(.draggable) {
		color: white;
		background: #3788d8;
		width: fit-content;
		padding: 1rem;
		margin: 1rem;
		cursor: pointer;
	}
</style>