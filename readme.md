1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Ans : getElementById finds the element by its id name where getElementsByClassName finds by class name. The querySelector get only the first occurence of the css selector where          querySelectorAll return all matching elements.

2. How do you create and insert a new element into the DOM?
    Ans : cosnt new_div = documnet.createElement('div') then documnet.appendChild(new_div)

3. What is Event Bubbling? And how does it work?
    Ans : Event bubbling means when a event that happens in the child element automatically bubble up to its parent element. When an event happens in child element it moves upwards through its parent element.

4. What is Event Delegation in JavaScript? Why is it useful?
    Ans : Event Delegation use a single event listener on the parent element instead of adding in child element. So when click on a child element the parent event was triggered and can be use to locate the child element usign event.target that was click on.

5. What is the difference between preventDefault() and stopPropagation() methods?
    Ans : stopPropagation() immedietly stop bubbling up the event to parent element where the preventDefault() prevent the default behaviour of the browser.