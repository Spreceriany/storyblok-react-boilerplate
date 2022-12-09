import { useStoryblok, StoryblokComponent } from "@storyblok/react";

const Price = ({ blok }) => {
  const names = blok.tabm;
  return (
    <>
      <div className="min-h-screen">
        <table>
          <caption>Statement Summary</caption>
          <thead>
            <tr>
              {blok.table.thead.map((el, index) => {
                return <th scope="col">{el.value}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {blok.table.tbody.map((el) => {
              return (
                <tr>
                  {el.body.map((td, index) => {
                    return <td data-tr-index={td.value}> {td.value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Price;
