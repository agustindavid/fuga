<script>
    export let date;

    let splittedDate=date.split('/');
    let year =splittedDate[2];
    let month =splittedDate[0];
    let day =splittedDate[1];

    date= [day, month, year].join('/');

</script>

<p>{date}</p>