{% extends '../layouts/default.swig' %}

{% block content %}

<h3>Reset Password</h3>
<form method="post">
    <input type="hidden" name="_csrf" value="{{_csrf}}" />

    <p>
        <label for="password">New Password</label>
        <input type="password" name="password" value="" placeholder="New password" autofocus="autofocus" />
    </p>

    <p>
        <label for="confirm">Confirm Password</label>
        <input type="password" name="confirm" value="" placeholder="Confirm password" />
    </p>

    <button>Change Password</button>
</form>

{% endblock %}
