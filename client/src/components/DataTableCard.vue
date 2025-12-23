<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Student Number</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Section</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AB123456789</td>
                    <td>Lorem Ipsum</td>
                    <td>08:06 AM</td>
                    <td>AB123456789</td>
                    <td><span class="status-pill">× Absent</span></td>
                    <td><button class="status">Mark As Present</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.table-container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

table {
    width: 100%;
    border-radius: 10px;
    background-color: var(--l-surface);
    border: var(--l-borders);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 10%);
}

thead {
    background-color: #F9FAFB;
    height: 50px;
}

th {
    font-size: 1rem;
    font-weight: 600;
}

tbody {
    text-align: center;

}

td{
    height: 4rem;
}

.status-pill {
    background-color: var(--l-absent-status-bg);
    color: var(--l-absent-text);
    border-radius: 2.5em;
    height: 2rem;
    padding: 0.3rem 0.8rem;
    align-items: center;
}

tbody td button {
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: .9rem;
    background-color: var(--l-present-status-bg);
    color: var(--l-present-text);
}
</style>