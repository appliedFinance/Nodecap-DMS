// Client side 
const say = console.log;

function load_MockData() {
	$('.js-data').html(`
		<div class="a-test">
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
		</div>

		<div class="a-test">
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
		</div>
		`);
}

function load_MainMenu() {
	say("+ load_MainMenu");

}


function watcher() {
	load_MainMenu();
	load_MockData();
};


$(watcher);
