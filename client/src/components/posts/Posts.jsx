import React from 'react';
import { List, ListItem, Divider } from 'semantic-ui-react';
import PostItem from './PostsItem';

const posts = [
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
  { 
  avatar: 'https://react.semantic-ui.com/images/avatar/small/tom.jpg',
  name: "ChakiNoris",
  date: "today",
  header: "ubaba",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."+
          "Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur"+
          "ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla"+
          "consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."+
          "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede"+
          "link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean"+
          "vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,"+
          "enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla"+
          "ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."+
          "Curabitur ullamcorper ultricies nisi."
  },
]

const Posts = () => (
  <div>  
    <List>
      {
          posts.map(post => {
            return (
              <div>
                <ListItem>
                  <PostItem 
                    avatar={post.avatar} 
                    name={post.name} 
                    date={post.date} 
                    header={post.header} 
                    text={post.text}
                  />
                </ListItem>
                <Divider hidden />
              </div>
            )
          })
      }
    </List>
  </div>
)

export default Posts;