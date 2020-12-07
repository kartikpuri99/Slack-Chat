import React, { Component } from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";

class MessagesHeader extends Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading,
      isPrivateChannel,
      isChannelStarred,
      handleStar
    } = this.props;
    return (
      <Segment clearing>
        {/* ChANNEL TITLE */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>
            {channelName}
            {!isPrivateChannel && (
              <Icon name={isChannelStarred?'star':"star outline"} onClick={handleStar} color={isChannelStarred?'yellow':"black"} />
            )}
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>
        {/* ChANNEL SEARCH INPUT */}
        <Header floated="right">
          <Input
            loading={searchLoading}
            onChange={handleSearchChange}
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
