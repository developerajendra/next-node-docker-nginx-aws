export default function handler(req, res) {
    res.status(200).json(
      [
        {id:1,title:'This is first article haha this awesome',description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ut reprehenderit ea omnis porro corporis accusamus inventore perferendis minus distinctio, sed non assumenda recusandae ratione dolorem. Pariatur, labore consectetur? At!"},
        {id:2,title:'This is first article haha this awesome',description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ut reprehenderit ea omnis porro corporis accusamus inventore perferendis minus distinctio, sed non assumenda recusandae ratione dolorem. Pariatur, labore consectetur? At!"}
      ]
    )
  }
  