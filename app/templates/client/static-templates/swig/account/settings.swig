{% extends '../layouts/default.swig' %}

{% block content %}

<h3>Account Information</h3>

<form action="/user/{{user.username}}/username" method="post">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" value="{{user.username}}" />
    </p>

    <button>Change username</button>
</form>

<h3>Profile Information</h3>

<form action="/user/{{user.username}}/profile?_method=PUT" method="post">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>
        <label for="email">Email:</label>
        <input type="text" name="email" id="email" value="{{user.email}}" />
    </p>

    <p>
        <label for="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" value="{{user.firstName}}" />
    </p>

    <p>
        <label for="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" value="{{user.lastName}}" />
    </p>

    <button>Update Profile</button>
</form>

<h3>Change Password</h3>

<form action="/user/{{user.username}}/password?_method=PUT" method="post">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>
        <label for="password">New Password:</label>
        <input type="password" name="password" id="password" />
    </p>

    <p>
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
    </p>

    <button>Change Password</button>
</form>

<h3>Delete Account</h3>

<p>You can delete your account, but keep in mind this action is irreversible.</p>

<form action="/user/?_method=DELETE" method="post">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />
    <button>Delete my account</button>
</form>

{% endblock %}
