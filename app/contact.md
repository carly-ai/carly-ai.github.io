---
layout: detail
title:  Contact
description: Have questions? Or want to give feedback? Or you just want to say hello?
permalink: /contact/
class: contact
type: narrow
---

### Feedback, questions, press inquiries, or just wanted to say hello?

We'd love to hear from you! Get in touch with us and we'll get back to you within <strong>8 minutes</strong>. Yup, only eight minutes. Try it.

<form action="https://getsimpleform.com/messages?form_api_token=072f6bf85cc7dd1e4ae63aff954445be" method="post" class="form-horizontal">
  <input type='hidden' name='redirect_to' value='{{ site.url }}/thank-you' />

  <div class="form-group form-group-lg">
    <label class="col-sm-2 control-label" for="name">Your name</label>
    <div class="col-sm-10">
      <input id="name" class="form-control" name="name" type="text" value="" />
    </div>
  </div>

  <div class="form-group form-group-lg">
    <label class="col-sm-2 control-label" for="email">Email</label>
    <div class="col-sm-10">
      <input id="email" class="form-control" name="email" type="text" value="" />
    </div>
  </div>

  <div class="form-group form-group-lg">
    <label class="col-sm-2 control-label" for="message">Message</label>
    <div class="col-sm-10">
      <textarea id="message" class="form-control" name="message" rows="4"></textarea>
    </div>
  </div>

  <div class="form-group form-group-lg">
    <label class="col-sm-2 control-label" for="submit_button"></label>
    <div class="col-sm-10">
      <input id="submit_button" type="submit" value="Send email" class="btn btn-primary btn-lg" />
    </div>
  </div>
</form>
