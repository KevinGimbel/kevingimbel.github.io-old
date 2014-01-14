---
layout: post
title: Labels in GMail
category: work
---

In case your company is using [GMail Business](http://www.google.com/intx/de/enterprise/apps/business/campaign/business-email-by-google-de.html?utm_campaign=emea-smb-apps-bkws-de&utm_medium=cpc&utm_source=google&utm_term=gmail%20business) there's one thing that comes to your daily work-life I really love about GMail: **Labels**. Labels are used to sort eMails automatically and - what I really love about - without removing them from the Inbox into 1000 folders. Instead they just get a Label and their own "View" inside GMail - on Desktop as well as Mobile which makes them even better!

Unfortunately they're kinda hidden and not really promoted by Google. To set up automatic labels you first you need to click the **gear** in the upper right, then **Settings** and then, in the top navigation just below the search input **Filters**. Now there's a "Create new Filter" link you should click. (I personally always search for this link because it is not highlighted in any way).

However, a dialog pops up where you can enter a bunch of stuff: From, To, Subject, Has words, Has not words, Has Attachment and Don't include chats. Pretty obvious what can be done here, right? Indeed but the thing is: When you work with a CallTracker system most of the input emails are not from a specific eMail so filtering after an eMail address is not an option. I currently stick with filtering the Subject Line for everything project. I'll give a example:

* Project Name: Project X 
* CallTracker Schemata: "[Project X - TASK #1 ] Description of the Task..."
* Expected Subject from Clients/Colleags: "Project X", "project-x.com", "Project-X"

So the rule I'd define here for the subject would be the following: 

{% highlight bash %}
 # Subject
 "Project X" OR project-x.com OR "[Project X" OR "Project-X"
{% endhighlight %}

The **OR** tells GMail to look for any of these Subject lines and put a label on it. The quotes are only used if there's a space between the words.
This rule covers the CallTracker as well as the other eMail Subjects so that everything gets sorted automatically into it's own Label view. I also try to match the Brand color with the Label color to have a visual difference for myself. 

<h3 id="update">Update</h3>
To enhance the features of sorting your inbox with Labels I found it useful for myself to create an additional filter that searches the content of the eMail. In the **Has Words** input I wrote "Assigned to: Gimbel, Kevin" and gave it a red-colored label called "Assigned". So whenever an eMail from a Calltracker-System contains "Assigned to: Gimbel, Kevin" it gets labeled with the Project related Label as well as the Assigned Label. In the "Assigned"-View (left sidebar, click on "Assigned") I can now see everything that's assigned to me - and it still contains the Project Labels in this view.