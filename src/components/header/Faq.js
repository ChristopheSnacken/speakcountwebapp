import React, {Component} from 'react'
import { connect } from 'react-redux'
import './Faq.css';
import { Link } from 'react-router-dom'
import mainLogo from '../../images/logo-website.png';




class Faq extends Component {
  render() {
    return (
      <div className='mainList'>
        <div className="mailnLogoList"><Link to={"/start"}><img  className="mainLogo" src={mainLogo} alt="speakcount"/></Link></div>
    <div className="Faq">
      “O Deep Thought computer," he said, "the task we have designed you to perform is this. We want you to tell us...." he paused, "The Answer." <br/><br/>
"The Answer?" said Deep Thought. "The Answer to what?"<br/>
"Life!" urged Fook.<br/><br/>
"The Universe!" said Lunkwill.
"Everything!" they said in chorus.<br/><br/>
Deep Thought paused for a moment's reflection.
"Tricky," he said finally.<br/>
"But can you do it?"<br/><br/>
Again, a significant pause.
"Yes," said Deep Thought, "I can do it."<br/><br/>
"There is an answer?" said Fook with breathless excitement.<br/><br/>
"Yes," said Deep Thought. "Life, the Universe, and Everything. There is an answer. But, I'll have to think about it."
...<br/><br/>
Fook glanced impatiently at his watch.
“How long?” he said.<br/><br/>
“Seven and a half million years,” said Deep Thought.<br/><br/>
Lunkwill and Fook blinked at each other.
“Seven and a half million years...!” they cried in chorus.<br/><br/>
“Yes,” declaimed Deep Thought, “I said I’d have to think about it, didn’t I?"<br/><br/>

[Seven and a half million years later.... Fook and Lunkwill are long gone, but their descendents continue what they started]<br/><br/>

"We are the ones who will hear," said Phouchg, "the answer to the great question of Life....!"<br/>
"The Universe...!" said Loonquawl.<br/>
"And Everything...!"<br/>
"Shhh," said Loonquawl with a slight gesture. "I think Deep Thought is preparing to speak!"<br/>
There was a moment's expectant pause while panels slowly came to life on the front of the console. Lights flashed on and off experimentally and settled down into a businesslike pattern. A soft low hum came from the communication channel.<br/><br/>

"Good Morning," said Deep Thought at last.<br/><br/>
"Er..good morning, O Deep Thought" said Loonquawl nervously, "do you have...er, that is..."<br/><br/>
"An Answer for you?" interrupted Deep Thought majestically. "Yes, I have."<br/><br/>
The two men shivered with expectancy. Their waiting had not been in vain.
"There really is one?" breathed Phouchg.<br/><br/>
"There really is one," confirmed Deep Thought.<br/>
"To Everything? To the great Question of Life, the Universe and everything?"<br/>
"Yes."<br/>
Both of the men had been trained for this moment, their lives had been a preparation for it, they had been selected at birth as those who would witness the answer, but even so they found themselves gasping and squirming like excited children.
"And you're ready to give it to us?" urged Loonsuawl.<br/><br/>
"I am."<br/>
"Now?"<br/>
"Now," said Deep Thought.<br/><br/>
They both licked their dry lips.<br/><br/>
"Though I don't think," added Deep Thought. "that you're going to like it."<br/><br/>
"Doesn't matter!" said Phouchg. "We must know it! Now!"<br/>
"Now?" inquired Deep Thought.<br/>
"Yes! Now..."<br/>
"All right," said the computer, and settled into silence again. The two men fidgeted. The tension was unbearable.<br/><br/>
"You're really not going to like it," observed Deep Thought.<br/>
"Tell us!"<br/>
"All right," said Deep Thought. "The Answer to the Great Question..."<br/>
"Yes..!"<br/>
"Of Life, the Universe and Everything..." said Deep Thought.<br/>
"Yes...!"<br/>
"Is..." said Deep Thought, and paused.<br/>
"Yes...!"<br/>
"Is..."<br/>
"Yes...!!!...?"<br/><br/>
"Forty-two," said Deep Thought, with infinite majesty and calm.”<br/><br/><br/>
― Douglas Adams, The Hitchhiker's Guide to the Galaxy
    </div>
  </div>

    )
  }
}
export default connect()(Faq)
