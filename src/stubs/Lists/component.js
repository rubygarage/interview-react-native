import React from 'react';

import {StyleSheet, FlatList, Text, View} from 'react-native';
import {
  IconButton,
  Card,
  Title,
  Paragraph,
  Portal,
  Dialog,
  Button,
  Snackbar,
} from 'react-native-paper';
import {range} from 'lodash';

const data = range(10).map(index => ({index}));

const RemoveDialog = ({visible, hideDialog, onOkPress}) => (
  <Portal>
    <Dialog visible={visible} onDismiss={hideDialog}>
      <Dialog.Content>
        <Paragraph>Do you want to delete list?</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button>Cancel</Button>
        <Button onPress={onOkPress}>Ok</Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>
);

const RemoveDialogError = ({visible, onDismissSnackBar}) => (
  <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
    Oops, something went wrong
  </Snackbar>
);

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {modalVisible: false, snakbarVisible: false};

    this.showModal = () => {
      this.setState({modalVisible: true});
    };

    this.hideModal = () => {
      this.setState({modalVisible: false});
    };

    this.showSnackbar = () => {
      this.setState({snakbarVisible: true, modalVisible: false});
    };

    this.hideSnackbar = () => {
      this.setState({snakbarVisible: false});
    };
  }

  render() {
    return (
      <>
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          data={data}
          renderItem={({index}) => (
            <Card style={styles.card}>
              <Card.Content>
                <Title>List name{index}</Title>
                <Paragraph>Description</Paragraph>
              </Card.Content>
              <Card.Actions>
                <IconButton
                  icon="delete-outline"
                  onPress={() => this.showModal()}
                />
              </Card.Actions>
            </Card>
          )}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text>No results</Text>
            </View>
          }
        />
        <RemoveDialog
          visible={this.state.modalVisible}
          hideDialog={this.hideModal}
          onOkPress={this.showSnackbar}
        />
        <RemoveDialogError
          visible={this.state.snakbarVisible}
          onDismissSnackBar={this.hideSnackbar}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: data.length === 0 ? 1 : 0,
  },
  card: {
    flex: 1,
    margin: 5,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lists;
