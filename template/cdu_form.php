<h3>Form Data</h3>

<!-- 
The <form action="javascript:void(0)" attribute in HTML prevents the form from submitting to a new page when the submit button is clicked. Instead, it executes the JavaScript code specified within the void(0) function.

Purpose:

Prevent default form submission: Avoids the browser navigating to a new page, which can be useful for performing actions within the current page.
Trigger custom JavaScript functions: Execute specific JavaScript code when the form is submitted, allowing for more complex interactions and dynamic updates. 
-->

<form action="javascript:void(0)" id="frm-cvs-upload">
    <p>
        <label for="csv_data_file">Upload CSV File</label>
        <input id="csv_data_file" type="file" name="csv_data_file" />
    </p>

    <p>
        <button type="submit">Upload CSV</button>
    </p>
</form>