# 2016-02-08 21:32

Okay, so <NameEntry> is complete, TDD style.

What's next?

* TDD the reducer, which for now, is basically just SET_STATE_FROM_SERVER (right?)
* TDD GameContainer#handleSetName: it should dispatch.. SET_NAME (marked meta:remote:true, handled by middleware)

----

Hmm, realizing something here...

There are the remote actions (which are handled by middleware, not a reducer) and then there's SET_STATE_FROM_SERVER

There's very little to worry about client side! (I guess that could change in the future. Any client-side only data would be handled by a reducer. Trivial example: color/font size settings, a cache of chat messages, sound settings, etc.)

It makes the use of redux seem kind of silly, but let's go along with it.

Aside: If the server were architected differently, there'd be more to do: right now the server just dumps the entire updated game state to the client. We're only talking like 200-400 bytes here. If things were different (300 baud modem, 500,000 object state tree) then we'd only send deltas, and have to reconcile them here. That'd be over engineering for this (even more so than it already is).

---



# 2016-02-06 14:24

Need to spend some time thinking about which are Components and which are Containers.

NameEntry is definitely a component:

```js
class NameEntry extends React.Component {
    handleSetName() {
       console.log(`Your name is ${this.refs.name.value}`);
    }

    render() {
        return (
          <div>
            <input type="text" ref="name" />
            <button onClick={this.handleSetName.bind(this)}>Set name</button>
          </div>
        );
    }
}
```

Does `NameEntry` need it's own container? In the Redux Egghead tutorials, the distinction of container v. component is a little more subtle than "always render from the top". There is awareness of Redux at multiple levels, e.g.

Or can `GameContainer` be a sort of god object?

I think that's the way to go for now until a refactor makes an alternate strategy obvious.

---

Sample tests:

* <NameEntry> renders a textbox
* <NameEntry> renders a button
* <NameEntry> calls the callback in this.props.onSetName when button is clicked
* <NameEntry> renders with an error if name.length isn't 2 < x < 50
  (e.g. this would be a setState call)


# 2016-01-31 16:07

Actions:

  'ADD_PLAYER',
  'START_GAME',
  'START_NEW_HAND',
  'DRAW_CARD',
  'DRAW_DISCARD',
  'DISCARD_CARD',
  'KNOCK'

Every one of these is a remote server action.

Is there *any* client-side only state (e.g. read AND write)? Either for the Redux store or the React local component state?

Think....

* Discarding a card could be a two step process.
   e.g. click the card, it raises up, click discard, it's gone.
   (e.g. prevent fat finger)

In this case, "selectedCard" would be local state.

e.g.

```xml
<Hand>
  <Card suit="s" name="4" onClick={handleSelectDiscardCard}>
</Hand>
```

```js
// inside `Card`
render() {
  if (this.props.isSelected) {
    className = "selected";
  }

  return (
    <div>
      <div className={className}>{card.suit} {card.name}</div>
    </div>
  )
}

handleSelectDiscardCard() {
  const card = { suit: props.suit, name: props.name };
  store.dispatch(selectDiscardCard(card));
}

// selectDiscardCard action creator
const selectDiscardCard = (card) => {
  return {
    type: 'SELECT_DISCARD_CARD',
    card
  };
}

// reducer case
case 'SELECT_DISCARD_CARD':
  return state.set('selectedCard', action.card);

// and in <Hand>...

render() {
  if (this.props.selectedCard)
    return <button onClick={handleDiscardCard} />
}
```


Remember, you'd have to be able to toggle it, etc. as well.

It's worth trying, but NOT initially.

For now, let's just stick to onClick => trigger immediate remote actions, and consider this local state thing a UX enhancement.




# 2016-01-31 15:30

```xml
<GameContainer
    state="WAITING_FOR_PLAYERS_OR_START_GAME"
    signedIn=false
    players={[]}>
  <NameEntry />
</GameContainer>

----

<GameContainer
    state="WAITING_FOR_PLAYERS_OR_START_GAME"
    me="a"
    players={['a']}>
  <PlayerList players={players}>
  <StartGame disabled={players.length < 2} />
</GameContainer>

----

<GameContainer
    state="WAITING_FOR_PLAYER_TO_DRAW"
    me="a"
    players={ ['a', 'b'] }
    currentPlayer="a">
  <DrawPile onClick={...} />  <!-- only clickable if currentPlayer == me -->
  <DiscardPile card="4s" onClick={...} />
  <Hand cards={['3s', '2s', '2c']}>
    <Card suit='s' name='3' />
    <Card suit='s' name='2' />
    <Card suit='c' name='2' />
  </Hand>
</GameContainer>

----


<GameContainer
    state="WAITING_FOR_PLAYER_TO_DISCARD"
    me="a"
    players={ ['a', 'b'] }
    currentPlayer="a">
  <DrawPile />
  <DiscardPile card="4s" />
  <Hand cards={['3s', '2s', '2c']}>
    <Card suit='s' name='3' onClick={...} />  <!-- again, only clickable if currentPlayer == me -->
    <Card suit='s' name='2' />
    <Card suit='c' name='2' />
    <Card suit='c' name='A' />
  </Hand>
</GameContainer>

<!-- XXX: No way to tell what the other player is doing. Out of scope for now. -->

----

<GameContainer
    state="WAITING_FOR_PLAYER_TO_DRAW"
    me="a"
    players={ ['a', 'b'] }
    currentPlayer="b">
  <OtherPlayer name="b" cards="3" />
  <DrawPile />
  <DiscardPile card="4s" />
  <Hand cards={['3s', '2s', '2c']}>
    <Card suit='s' name='3' onClick={...} />  <!-- again, only clickable if currentPlayer == me -->
    <Card suit='s' name='2' />
    <Card suit='c' name='2' />
    <Card suit='c' name='A' />
  </Hand>
</GameContainer>

----

<GameContainer
    state="WAITING_FOR_PLAYER_TO_DISCARD"
    me="a"
    players={ ['a', 'b'] }
    currentPlayer="b">
  <OtherPlayer name="b" cards="4" />
  <DrawPile />
  <DiscardPile card="4s" />
  <Hand cards={['3s', '2s', '2c']}>
    <Card suit='s' name='3' onClick={...} />  <!-- again, only clickable if currentPlayer == me -->
    <Card suit='s' name='2' />
    <Card suit='c' name='2' />
    <Card suit='c' name='A' />
  </Hand>
</GameContainer>

----

<GameContainer
    state="THIRTY_ONE"
    me="a"
    players={ ['a', 'b'] }
    currentPlayer="b">
  <OtherPlayer name="b">
    <Card suit='s' name='Q' />
    <Card suit='s' name='K' />
    <Card suit='s' name='A' />
  </OtherPlayer>
  <DrawPile />
  <DiscardPile card="4s" />
  <Hand cards={['3s', '2s', '2c']}>
    <Card suit='s' name='3' onClick={...} />  <!-- again, only clickable if currentPlayer == me -->
    <Card suit='s' name='2' />
    <Card suit='c' name='2' />
    <Card suit='c' name='A' />
  </Hand>
</GameContainer>

----

<GameContainer
    state="KNOCK_HAND_OVER"
    me="a"
    players={ ['a', 'b'] }
    currentPlayer="b"
    knockedBy="b">
  <OtherPlayer name="b" cards="3">
    <Card suit='s' name='Q' />
    <Card suit='s' name='K' />
    <Card suit='s' name='10' />
  </OtherPlayer>
  <DrawPile />
  <DiscardPile card="4s" />
  <Hand cards={['3s', '2s', '2c']}>
    <Card suit='s' name='3' onClick={...} />  <!-- again, only clickable if currentPlayer == me -->
    <Card suit='s' name='2' />
    <Card suit='c' name='2' />
    <Card suit='c' name='A' />
  </Hand>
</GameContainer>
```


# 2016-01-25 00:15

Classic React child-parent communication "problem":

NameEntry should accept an onSubmit function.

Traditionally, Game would call this.setState()...
But in a Redux config, Game instead will have to `dispatch`.

So, here's our first client-side reducer function:

SET_PLAYER_NAME => { player: 'foo' }

And of course that action creator also dispatches a remote action:
ADD_PLAYER

Remember, we had a middleware that checked `meta.remote`.
(we might as well name them the same client/server-side - ADD_PLAYER)

So.. we have to write reducer tests. Then async action creator tests.

1) Reducer test for NEW_STATE: basically when the server sends us new
state, we should update our store. KISS here, don't worry about bytes yet.

Okay, now we have some more issues:
Do we even have any client side actions/reducers? Everything happens remotely...
(Now I get what redux-optimist is for.)

2) I don't actually know how to do the simplest thing: get text out of a textbox.
